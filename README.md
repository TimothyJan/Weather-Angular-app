
<h3>Weather Angular App</h3>
<p>Angular app that displays the weather using the <a href="https://openweathermap.org/api">Open Weather API</a></p>

<ul>
  <li>One application and one library.</li>
  <li>In library project all weather components need to be placed.</li>
    <ul>
      <li><code>weather-form.component.tx</code> uses <code>loading-spinner</code> to display a loading spinner when HTTP request is in progress.</li>
    </ul>
  <li>At least one of the library components need to use a custom angular directive.</li>
      <ul>
        <li>Component weather-form has custom angular directive <code>highlight.directive.ts</code>. 
          <ul>
            <li>Directive <code>highlight.directive.ts</code> will be used to produce a highlighted text box to illustrate what location the weather app is displaying.</li>
          </ul>
        </li>
    </ul>
  <li>Application need to use the library components.</li>
</ul>


