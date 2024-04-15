export type SuperBasicEdge = [string, string, string, true?];

export type BaseEdge = {
  start: string;
  end: string;
};

export type FleshedEdge = {
  start: string;
  end: string;
  via: string;
  edgeType: string;
  oneWay?: boolean;
};

export class Edge {
  start: string;
  end: string;
  via: string;
  edgeType: string;
  oneWay?: boolean;

  constructor(
    start: string,
    end: string,
    via: string,
    edgeType: string,
    directional: boolean = false
  ) {
    this.start = start;
    this.end = end;
    this.via = via;
    this.edgeType = edgeType;
    this.oneWay = directional;
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

    if (this.oneWay) {
      return [edge];
    }

    const edge2 = JSON.parse(JSON.stringify(edge));

    edge2.start = edge.end;
    edge2.end = edge.start;

    return [edge, edge2];
  }
}
