import React from "react";
import Form from "./components/Form";

class App extends React.Component {
  handleSubmit = (v) => {
    console.log("handleSubmit", v);
    const { html, css, js } = v;

    const data = {
      html: html || "",
      css: css || "",
      js: js || "",
    };

    this.refs.codepanData.value = JSON.stringify(data)
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");
    this.refs.codepanForm.submit();
  };
  render() {
    return (
      <div className="h-screen">
        <div className="border-2 border-dashed w-2/3 m-auto mt-8 mb-8 p-4">
          <Form onSubmit={this.handleSubmit} />
          <form
            ref="codepanForm"
            action="https://codepen.io/pen/define"
            method="POST"
            target="_blank"
          >
            <input type="hidden" name="data" ref="codepanData" />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
