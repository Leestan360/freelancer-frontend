import React from 'react';
import Routings from '../routes/Routings';
// import $ from 'jquery'; // Import jQuery

// // Import your scripts
// import '../js/jquery.min';
// import '../js/datepicker.min';
// import '../js/i18n/datepicker.en';
// import '../vendor/bootstrap/js/bootstrap.bundle.min';
// import '../vendor/OwlCarousel/owl.carousel';
// import '../vendor/semantic/semantic.min';
// import '../js/custom1';

function App() {
  // useEffect(() => {
  //   // Initialize datepicker script
  //   $(document).ready(() => {
  //     $('.datepicker').datepicker();
  //   });

  //   // Initialize custom1.js script
  //   $.getScript('../js/custom1.js')
  //     .done(() => {
  //     })
  //     .fail((jqxhr, settings, exception) => {
  //       console.error('Failed to load custom1.js:', exception);
  //     });


  // }, []);

  return (
    <div className="App">
      <Routings />
    </div>
  );
}

export default App;