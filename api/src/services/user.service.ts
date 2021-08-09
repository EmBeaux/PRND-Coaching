import User from "../models/user.model"
import serviceHelper from "./service.helper";

export default {
  ...serviceHelper(User, 'user')
}