import type {Schema} from "@cfworker/json-schema";
import {Validator} from "@cfworker/json-schema";
import type {PluginSimple, PluginWithParams} from "markdown-it";
import MarkdownIt from "markdown-it";
import plainText from "markdown-it-plain-text";

import {extract_frontmatter} from "../frontmatter";

export type IMarkdownPlugin = PluginSimple | [PluginWithParams, ...any[]];

export function render_markdown<FrontmatterResults, PluginResults>(
    text: string,
    schema?: Schema,
    plugins: IMarkdownPlugin[] = [],
    is_inline: boolean = false
): [FrontmatterResults, PluginResults, string, string] {
    const [frontmatter, content] = extract_frontmatter<FrontmatterResults>(text);

    if (schema) {
        const validator = new Validator(schema, "2020-12", false);
        const result = validator.validate(frontmatter);

        if (!result.valid) throw result;
    }

    const md = new MarkdownIt({
        html: true,
        linkify: true,
    });

    md.use(plainText);

    for (const plugin of plugins) {
        if (Array.isArray(plugin)) {
            const [func, ...options] = plugin;
            md.use(func, options);
        } else md.use(plugin);
    }

    const results = {} as PluginResults;
    const render = is_inline ? md.renderInline(content, results) : md.render(content, results);
    const plain_text = (md as any).plainText as string;

    return [frontmatter, results, plain_text, render];
}
