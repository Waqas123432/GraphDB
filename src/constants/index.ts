import UploadIcon from "src/assets/upload.svg";
import NamespaceIcon from "src/assets/namespace.svg";
import SparqlIcon from "src/assets/sparql.svg";
import StatisticsIcon from "src/assets/statistics.svg";
import GraphIcon from "src/assets/graph.svg";
import ProcessIcon from "src/assets/process.svg";

export const MAIN_ROUTES = [
  { label: "Setting", path: "/", icon: UploadIcon },
  { label: "Data upload", path: "/data-upload", icon: UploadIcon },
  { label: "Namespace", path: "/namespace", icon: NamespaceIcon },
  { label: "SPARQL", path: "/sparql", icon: SparqlIcon },
  { label: "Statistics", path: "/statistics", icon: StatisticsIcon },
  { label: "Graph navigation", path: "/graph-navigation", icon: GraphIcon },
  { label: "My process", path: "/my-process", icon: ProcessIcon },
];
