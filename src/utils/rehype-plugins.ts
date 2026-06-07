/** Demotes the first h1 in rendered markdown content to h2 (avoids duplicate h1 with layout header). */
export function rehypeDemoteFirstH1() {
    return (tree) => {
        let demoted = false;

        const visit = (node) => {
            if (demoted) return;
            if (node.type === 'element' && node.tagName === 'h1') {
                node.tagName = 'h2';
                demoted = true;
                return;
            }
            if (node.children) {
                for (const child of node.children) {
                    visit(child);
                    if (demoted) return;
                }
            }
        };

        visit(tree);
    };
}

/** Adds data-language attribute to pre elements for code block language labels. */
export function rehypeCodeLanguage() {
    return (tree) => {
        const visit = (node) => {
            if (node.type === 'element' && node.tagName === 'pre') {
                const codeChild = node.children?.find(
                    (child) => child.type === 'element' && child.tagName === 'code',
                );
                const langClass = codeChild?.properties?.className?.find?.((c) =>
                    String(c).startsWith('language-'),
                );
                if (langClass) {
                    const lang = String(langClass).replace('language-', '');
                    node.properties = node.properties || {};
                    node.properties['data-language'] = lang;
                }
            }
            if (node.children) {
                for (const child of node.children) {
                    visit(child);
                }
            }
        };

        visit(tree);
    };
}

/** Wraps tables in a div.table-wrapper for horizontal scroll on mobile. */
export function rehypeWrapTables() {
    return (tree) => {
        const visit = (node, index, parent) => {
            if (
                node.type === 'element' &&
                node.tagName === 'table' &&
                parent?.type === 'element' &&
                parent.tagName !== 'div'
            ) {
                const wrapper = {
                    type: 'element',
                    tagName: 'div',
                    properties: { className: ['table-wrapper'] },
                    children: [node],
                };
                parent.children[index] = wrapper;
                return;
            }
            if (node.children) {
                for (let i = 0; i < node.children.length; i++) {
                    visit(node.children[i], i, node);
                }
            }
        };

        visit(tree);
    };
}
