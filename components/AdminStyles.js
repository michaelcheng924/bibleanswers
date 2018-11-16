import { createGlobalStyle } from "styled-components";

const AdminStyles = createGlobalStyle`
textarea {
  font-size: 16px;
  padding: 4px 8px;
  width: 100%;
}

.admin__login {
  margin-bottom: 20px;
  text-align: center;
}

.admin__login-input {
  margin-bottom: 10px;
  width: 250px;
}

.admin__log-out {
  border: 0;
  font-size: 12px;
  padding: 2px 4px !important;
}

.admin__update-sitemap {
  background: #F8BBD0;
  padding: 20px;
}

.admin__lists {
  display: flex;
  justify-content: space-around;
}

.admin__filters {
  display: flex;
  flex-wrap: wrap;
}

.admin__filter {
  align-items: center;
  display: flex;
  margin-right: 15px;
}

.admin__save-buttons {
  align-items: center;
  display: flex;
  position: fixed;
  right: 0;
  top: 0;
}

.admin__save-buttons button {
  margin-left: 10px !important;
}

.admin__post-selects {
  display: flex;
  flex-wrap: wrap;
}

.admin__post-select {
  margin-right: 20px;
  width: 300px;
}

.post-editor__images {
  background: #B3E5FC;
  display: flex;
  padding: 20px;
}

.post-editor__html-container {
  display: flex;
  justify-content: space-around;
}

.post-editor__html-content {
  border: 1px solid rgba(0, 0, 0, .54);
  flex-grow: 1;
  font-size: 18px;
  margin-top: auto;
  max-width: 700px;
  padding-left: 20px;
}

.post-editor__html-editor {
  font-family: monospace;
}

.admin__create-tag {
  background: #BDBDBD;
  padding: 30px;
}
`;

export default AdminStyles;
