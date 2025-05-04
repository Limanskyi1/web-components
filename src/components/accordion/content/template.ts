const styles = `
    <style>
        :host {
          overflow: hidden;
          max-height: 0;
          background: #fff;
          opacity: 0;
          display: block;
          transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out, padding 0.3s ease-in-out;
          padding: 0 10px;
        }
        :host([visible="true"]) {
          opacity: 1;
          padding: 10px;
        }
    </style>
`

export const template = styles + `<slot></slot>`;