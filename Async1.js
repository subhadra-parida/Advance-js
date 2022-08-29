async function myFunction() {
    return ;
  }
  myFunction().then(
    function(value) {
      myDisplayer(value);
    },
  );
  myFunction().catch(
    function(error) {
      myDisplayer(error);
    }
  );

