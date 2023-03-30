// your code here
function updateURL() {
			// Get input values
			var name = document.getElementById("name").value;
			var year = document.getElementById("year").value;

			// Construct URL query string
			var queryString = "?name=" + encodeURIComponent(name) + "&year=" + encodeURIComponent(year);

			// Update URL in h3 element
			document.getElementById("url").textContent = "https://localhost:8080/" + queryString;
		}
	</script>
