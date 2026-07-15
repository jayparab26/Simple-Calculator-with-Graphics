const display= document.getElementById('display');

function appendValue(value) {
	if(display.value=='0' && value!=='.'){
		display.value = value;
	}
	else {
		display.value+=value;
	}

}

function clearDisplay() {
	display.value='';
}

function calculateResult(){
	try{
		const currentExpression=display.value;
		if(display.value!=''){
			//const finalAnswer=eval(currentExpression);
			//display.value=currentExpression+ '\n' + finalAnswer;
			display.value=eval(display.value);

			//isEvaluated=true;
		}
	}catch(error){

		display.value='Error';
	}

}

function undoLast(){
	if(display.value!=='' && display.value!=='Error'){
		display.value=display.value.slice(0,-1);
	}
}