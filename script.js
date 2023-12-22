function insert_Row() {
    //Write your code here
	const table=document.querySelector('#sampleTable');
	const tr=document.createElement('tr');
	const colOne=document.createElement('td');
	const colTwo=document.createElement('td');

	colOne.innerText="New Cell1"
	colTwo.innerText="New Cell2"
	tr.append(colOne,colTwo);
	table.append(tr);
	  console.log(colOne)
}
