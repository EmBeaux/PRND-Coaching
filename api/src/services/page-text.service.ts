import PageText from "../models/page-text.model"
import serviceHelper from "./service.helper";

export default {
  ...serviceHelper(PageText, 'pageText')
}