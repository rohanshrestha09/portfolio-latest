import "./style.css";
import contentData from "./data";
import previewStore from "./store";
import Alpine from "alpinejs";

Alpine.data("content", contentData);

Alpine.store("preview", previewStore);

Alpine.start();
