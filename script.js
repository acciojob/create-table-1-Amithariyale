function insert_Row() {
    //Write your code here
	const table=document.getElementById('sampleTable');
	const button=document.querySelector('input');
	
	const tr=document.createElement('tr');
		tr.innerHTML=`<td>New cell1</td> 
		<td>New cell2</td>`;
		table.insertBefore(tr,table.children[0]);
}
