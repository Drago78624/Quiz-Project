function countdown( elementName, minutes, seconds )
{
    var element, endTime, hours, mins, msLeft, time;
    function twoDigits( n )
    
    {return (n <= 9 ? "0" + n : n);}

    element = document.getElementById( elementName );
    endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
    updateTimer();


    function updateTimer()
    {
        msLeft = endTime - (+new Date);

        if ( msLeft < 1000) {
            element.innerHTML = "Time is up!";
            if(!timeUpOverlay.classList.contains("visible")){
                ansChecker()
            }

        } else {
            time = new Date( msLeft );
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
            setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
        }
    }
}

countdown( "timer", 10, 0 );