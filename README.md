
<h3>Weather Angular App</h3>
<p>Angular app that displays the weather using the <a href="https://openweathermap.org/api">Open Weather API</a></p>

<hr>

Requirements
<ul>
  <li>One application and one library.</li>
    <ul>
      <li>Application named app and library named lib.</li>
    </ul>
  <li>In library project all weather components need to be placed.</li>
    <ul>
      <li><code>weather-form.component.ts</code> displays a form and when the form is submitted the weather details are displayed or an error message is produced. It also uses component <code>loading-spinner.component.ts</code> to display a loading spinner when HTTP request is in progress.</li>
    </ul>
  <li>At least one of the library components need to use a custom angular directive.</li>
      <ul>
        <li>Component weather-form has custom angular directive <code>highlight.directive.ts</code>. 
          <ul>
            <li>Directive <code>highlight.directive.ts</code> is used to produce a highlighted text box to direct the user to input a location and to illustrate what location the weather app is displaying.</li>
          </ul>
        </li>
    </ul>
  <li>Application need to use the library components.</li>
      <ul>
        <li>Application uses the <code>weather-form.component.ts</code>and the <code>loading-spinner.component.ts</code></li>
    </ul>
</ul>


