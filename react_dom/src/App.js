import './App.css';
import reactDom from 'react-dom';

function App() {
  const myelement = (
    <table>
      <tr>
        <th>
          Name
        </th>
      </tr>
      <tr>
        <td>
          John
        </td>
      </tr>
      <tr>
        <td>
          Elsa
        </td>
      </tr>
    </table>
  );

  return (
    reactDom.render(myelement, document.getElementById("root"))
  );
}

export default App;
