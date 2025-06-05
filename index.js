   document.getElementById('myForm').addEventListener('submit', function(event) {
       event.preventDefault(); // Prevent default form submission

       const form = event.target;
       const formData = new FormData(form);

       const name = formData.get("Username");
       const email = formData.get('email');
      const password = formData.get('password');
	  const age = formData.get('age');
	  const church = formData.get('church');
	  const matter = formData.get('matter');
       
	   console.log('Username', name);
       console.log('email', email);
	   console.log('password', password);
	   console.log('age',age);
	   console.log('church',church);
	   console.log('matter',matter);
	  
   });