// To change the sheet  edit the add sheet id after https://opensheet.elk.sh/
fetch(
		"https://opensheet.elk.sh/1MMzVXNwkPPD85HTwXU7tbvFw46o5I_qwNrsOWpw1VuI/sheet1"
	)
	.then((res) => res.json())
	.then(function(products) {
		let placeholder = document.querySelector("#data-output");
		let outputOtherFields = "";

		let placeholderName = document.querySelector("#project-name");
		let outputName = "";

		for (let product of products) {
			console.log(product);
			outputName += `
                                         <tr class="row100 body">
                                             <td class="cell100 column1">${product.topic}</td>
                                         </tr>
                                      `;
		}

		for (let product of products) {
			console.log(product);
			outputOtherFields += `
                 <tr class="row100 body">
                     <td class="cell100 column3">${product.githublink}</td>
                     <td class="cell100 column4">${product.swagger}</td>
                  </tr>
               `;
		}

		placeholderName.innerHTML = outputName;
		placeholder.innerHTML = outputOtherFields;
	});