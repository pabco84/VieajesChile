$(document).ready(function(){


    let rl=prompt("ingrese nombre", 'Federico');
    let nota1rl =prompt1("ingrese nota1", '5');
    let nota2rl =prompt1("ingrese nota2", '4');
//tabla


<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">rl</th>
      <th scope="col">nota1rl</th>
      <th scope="col">nota2rl</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
});