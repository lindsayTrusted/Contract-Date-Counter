let globalContext;
var displayTeammate = document.getElementById('frontTeammate');

Front.contextUpdates.subscribe(context => {
  globalContext = context;
  displayTeammate.innerHTML = 'Hello ' + context.teammate.name.split(' ')[0] + ' 👋';

  switch(context.type) {
    case 'noConversation':
      console.log('No conversation selected');
      break;
    case 'singleConversation':
      console.log('Selected conversation context:', context);

      try {
        console.log(context.conversation);
        context.listMessages().then((results) => {
          console.log('Results: ', results);
        });
      } catch (error) {
        console.log('Error: ', error);
      }

      break;
    case 'multiConversations':
      console.log('Multiple conversations selected', context.conversations);
      break;
    default:
      console.error(`Unsupported context type: ${context.type}`);
      break;
  }

setdates();
});

function setdates(){
	var d = new Date();
	d.setDate(d.getDate() + (1 + 7 - d.getDay()) % 7);

	//Generate start dates
	document.getElementById('1.0').innerHTML = pp(d);
	document.getElementById('2.0').innerHTML = addweeks(d,1);
	document.getElementById('3.0').innerHTML = addweeks(d,1);
	document.getElementById('4.0').innerHTML = addweeks(d,1);
	document.getElementById('5.0').innerHTML = addweeks(d,1);
	document.getElementById('6.0').innerHTML = addweeks(d,1);
	document.getElementById('7.0').innerHTML = addweeks(d,1);
	document.getElementById('8.0').innerHTML = addweeks(d,1);
	document.getElementById('9.0').innerHTML = addweeks(d,1);

	//Generate 8 week end dates
	d.setDate(d.getDate() - 2);
	document.getElementById('1.8').innerHTML = pp(d);
	document.getElementById('2.8').innerHTML = addweeks(d,1);
	document.getElementById('3.8').innerHTML = addweeks(d,1);
	document.getElementById('4.8').innerHTML = addweeks(d,1);
	document.getElementById('5.8').innerHTML = addweeks(d,1);
	document.getElementById('6.8').innerHTML = addweeks(d,1);
	document.getElementById('7.8').innerHTML = addweeks(d,1);
	document.getElementById('8.8').innerHTML = addweeks(d,1);
	document.getElementById('9.8').innerHTML = addweeks(d,1);

	//Generate 12 week end dates
	d.setDate(d.getDate() - 21);
	document.getElementById('1.12').innerHTML = pp(d);
	document.getElementById('2.12').innerHTML = addweeks(d,1);
	document.getElementById('3.12').innerHTML = addweeks(d,1);
	document.getElementById('4.12').innerHTML = addweeks(d,1);
	document.getElementById('5.12').innerHTML = addweeks(d,1);
	document.getElementById('6.12').innerHTML = addweeks(d,1);
	document.getElementById('7.12').innerHTML = addweeks(d,1);
	document.getElementById('8.12').innerHTML = addweeks(d,1);
	document.getElementById('9.12').innerHTML = addweeks(d,1);
	return;
}

function addweeks(date, numweeks){
	console.log(date);
	date.setDate(date.getDate() + (numweeks * 7));
	var stringify = date.toLocaleDateString();
	return stringify.slice(0,-5);
}


function pp(date){
	var formatted = (date.getMonth()+1) + "/" + date.getDate();
	return formatted;
}