console.log("Javascript is connected");


const tableData = document.getElementById('myInvention');

let tableHtml= '<thead>\
			<tr>\
				<th>X</th>\
				<th>Y</th>\
				<th>A(average)</th>\
				<th>D(absolute distance)</th>\
				<th>ANSWER=(XY)^2</th>\
				<th>A^4</th>\
				<th>D^2</th>\
				<th>A^2</th>\
				<th>XY</th>\
				<th>(A^2)+(XY)</th>\
				<th>D^2((A^2)+(XY))</th>\
				<th>(A^4)-D^2((A^2)+(XY))</th>\
			</tr>\
		</thead>\
		<tbody>';

let max=100;
for (let i=0;i<max;i++){
	let x = (i*2)+2;
	let y = (max*2)-((i*2)+2);
	let avg = (x+y)/2;
	let d= Math.abs(x-avg);
	let a2 = (avg**2);
	let d2 = (d**2);
	let a4 = (avg**4);
	let answer = ((x*y)**2)
	 
	tableHtml += "<tr>"; 
	tableHtml += "<td>"+x+"</td>"; 
	tableHtml += "<td>"+y+"</td>"; 
	tableHtml += "<td>"+avg+"</td>"; 
	tableHtml += "<td>"+d+"</td>"; 
	tableHtml += "<td>"+answer+"</td>"; 
	tableHtml += "<td>"+a4+"</td>"; 
	tableHtml += "<td>"+d2+"</td>"; 
	tableHtml += "<td>"+a2+"</td>"; 
	tableHtml += "<td>"+(x*y)+"</td>"; 
	tableHtml += "<td>"+((x*y) + a2)+"</td>"; 
	tableHtml += "<td>"+(d2*(x*y + a2))+"</td>"; 
	tableHtml += "<td>"+(a4-(d2*((x*y) + a2)))+"</td>"; 
	tableHtml += "</tr>"; 

}
tableHtml += "</table>";

myInvention.innerHTML=tableHtml;
