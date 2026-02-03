export default function getElementsByStyle(element, property, value) {
  const result = [];

  function traverse(node) {
    // Only process element nodes
    if (node.nodeType !== Node.ELEMENT_NODE) return;

    const styles = window.getComputedStyle(node);

    if (styles.getPropertyValue(property) === value) {
      result.push(node);
    }

    // Traverse children
    for (const child of node.children) {
      traverse(child);
    }
  }

  traverse(element);
  return result;
}
