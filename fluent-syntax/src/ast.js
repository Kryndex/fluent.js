class Node {
  constructor() {}
}

export class Resource extends Node {
  constructor(body = [], comment = null) {
    super();
    this.type = 'Resource';
    this.body = body;
    this.comment = comment;
  }
}

export class Entry extends Node {
  constructor(span = null, annotations = []) {
    super();
    this.type = 'Entry';
    this.span = span;
    this.annotations = annotations;
  }

  addSpan(start, end) {
    this.span = new Span(start, end);
  }

  addAnnotation(annot) {
    this.annotations.push(annot);
  }
}

export class Message extends Entry {
  constructor(
    id, value = null, attributes = null, tags = null, comment = null,
    span, annotations
  ) {
    super(span, annotations);
    this.type = 'Message';
    this.id = id;
    this.value = value;
    this.attributes = attributes;
    this.tags = tags;
    this.comment = comment;
  }
}

export class Pattern extends Node {
  constructor(elements) {
    super();
    this.type = 'Pattern';
    this.elements = elements;
  }
}

export class TextElement extends Node {
  constructor(value) {
    super();
    this.type = 'TextElement';
    this.value = value;
  }
}

export class Expression extends Node {
  constructor() {
    super();
    this.type = 'Expression';
  }
}

export class StringExpression extends Expression {
  constructor(value) {
    super();
    this.type = 'StringExpression';
    this.value = value;
  }
}

export class NumberExpression extends Expression {
  constructor(value) {
    super();
    this.type = 'NumberExpression';
    this.value = value;
  }
}

export class MessageReference extends Expression {
  constructor(id) {
    super();
    this.type = 'MessageReference';
    this.id = id;
  }
}

export class ExternalArgument extends Expression {
  constructor(id) {
    super();
    this.type = 'ExternalArgument';
    this.id = id;
  }
}

export class SelectExpression extends Expression {
  constructor(expression, variants) {
    super();
    this.type = 'SelectExpression';
    this.expression = expression;
    this.variants = variants;
  }
}

export class AttributeExpression extends Expression {
  constructor(id, name) {
    super();
    this.type = 'AttributeExpression';
    this.id = id;
    this.name = name;
  }
}

export class VariantExpression extends Expression {
  constructor(id, key) {
    super();
    this.type = 'VariantExpression';
    this.id = id;
    this.key = key;
  }
}

export class CallExpression extends Expression {
  constructor(callee, args) {
    super();
    this.type = 'CallExpression';
    this.callee = callee;
    this.args = args;
  }
}

export class Attribute extends Node {
  constructor(id, value) {
    super();
    this.type = 'Attribute';
    this.id = id;
    this.value = value;
  }
}

export class Tag extends Node {
  constructor(name) {
    super();
    this.type = 'Tag';
    this.name = name;
  }
}

export class Variant extends Node {
  constructor(key, value, def = false) {
    super();
    this.type = 'Variant';
    this.key = key;
    this.value = value;
    this.default = def;
  }
}

export class NamedArgument extends Node {
  constructor(name, val) {
    super();
    this.type = 'NamedArgument';
    this.name = name;
    this.val = val;
  }
}

export class Identifier extends Node {
  constructor(name) {
    super();
    this.type = 'Identifier';
    this.name = name;
  }
}

export class Symbol extends Identifier {
  constructor(name) {
    super(name);
    this.type = 'Symbol';
  }
}

export class Comment extends Entry {
  constructor(content, span, annotations) {
    super(span, annotations);
    this.type = 'Comment';
    this.content = content;
  }
}

export class Section extends Entry {
  constructor(name, comment = null, span, annotations) {
    super(span, annotations);
    this.type = 'Section';
    this.name = name;
    this.comment = comment;
  }
}

export class Function extends Identifier {
  constructor(name) {
    super(name);
    this.type = 'Function';
  }
}

export class Junk extends Entry {
  constructor(content, span, annotations) {
    super(span, annotations);
    this.type = 'Junk';
    this.content = content;
  }
}

export class Span extends Node {
  constructor(start, end) {
    super();
    this.type = 'Span';
    this.start = start;
    this.end = end;
  }
}

export class Annotation extends Node {
  constructor(code, args = [], message) {
    super();
    this.type = 'Annotation';
    this.code = code;
    this.args = args;
    this.message = message;
  }

  addSpan(start, end) {
    this.span = new Span(start, end);
  }
}
