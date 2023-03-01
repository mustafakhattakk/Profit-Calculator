function calculateTip()
{
    var BillAmt = document.getElementById("billamt").value;
    var ServiceQual = document.getElementById("serviceQual").value;
    var NOP = document.getElementById("peopleamt").value;


    if(BillAmt ==="" || ServiceQual == 0 )
    {
        alert("Please Enter values");
        return;
    }

    
    if(NOP === "" || NOP <= 1 )
    {
        NOP = 1;
        document.getElementById("each").style.display = "none";
    }

    else
    {
        document.getElementById("each").style.display = "block";
    }

    var total = (BillAmt * ServiceQual) / NOP;
    total = Math.round(total);

    document.getElementById("TotalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;


}



    document.getElementById("TotalTip").style.display = "none";
    document.getElementById("each").style.display = "none";


    document.getElementById("calculate").onclick = function()
    {
        calculateTip();
    }