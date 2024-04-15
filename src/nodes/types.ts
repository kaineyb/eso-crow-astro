export type BasicEdge = [string, string, string, boolean?];
export type BasicEdgeWithLabel = [string, string, string, string, boolean?];

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
