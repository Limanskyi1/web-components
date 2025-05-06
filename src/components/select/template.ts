const styles = `
    <style>
        .select {
            position: relative;
            border: 1px solid #ccc;
            padding: 8px;
            border-radius: 4px;
            background: white;
            cursor: pointer;
            user-select: none;
        }
          .options {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            border: 1px solid #ccc;
            background: white;
            display: none;
            z-index: 10;
          }
          .option {
            padding: 8px;
          }
          .option:hover {
            background: #eee;
          }
          .open .options {
            display: block;
          }
        </style>
`;
const html = `
 <div class="select">
          <div class="current"></div>
          <div class="options"></div>
        </div>
`;

export const template = styles + html;
