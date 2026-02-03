/**
 * @param {Object} element
 * @return {string}
 */
export default function serializeHTML(node, level = 0) {
  const intent = '\t'.repeat(level);

  if(node && typeof node === 'string') {
    return intent + node;
  }

  if (!node || typeof node.tag !== 'string') {
    // invalid node, return empty string
    return '';
  }

  const {tag, children = []} = node;
  const childrenNode = Array.isArray(children) ? children : [];

  const startingTag = `${intent}<${tag}>`;

  const childrenTags = childrenNode.map(item => serializeHTML(item, level + 1));

  const clossingTag = `${intent}</${tag}>`;

  return [startingTag, ...childrenTags, clossingTag].join('\n');
}