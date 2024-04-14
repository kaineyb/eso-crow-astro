export type EdgeType = {
  start: string;
  end: string;
  via: string;
};

export class Edge {
  start: string;
  end: string;
  via: string;
  edgeType: string;

  constructor(start: string, end: string, via: string, edgeType: string) {
    this.start = start;
    this.end = end;
    this.via = via;
    this.edgeType = edgeType;
  }

  nodes(): string[] {
    return [this.start, this.end];
  }

  edges(): EdgeType[] {
    const edge = {
      start: this.start,
      end: this.end,
      via: this.via,
      edgeType: this.edgeType,
    };

    return [edge];
  }
}
