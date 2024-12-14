$(document).ready(function() {
    $(".buttons").append('<button>7</button><button>8</button><button>9</button><button>/</button>' +
                         '<button>4</button><button>5</button><button>6</button><button>*</button>' +
                         '<button>1</button><button>2</button><button>3</button><button>-</button>' +
                         '<button>0</button><button>.</button><button>C</button><button>+</button>' +
                         '<button id="equals">=</button>');

    $(".buttons button").click(function() {
        let buttonText = $(this).text();
        let displayValue = $("#display").val();

        if (buttonText === "=") {
            try {
                displayValue = eval(displayValue);
            } catch (error) {
                displayValue = "Error";
            }
        } else if (buttonText === "C") {
            displayValue = "";
        } else {
            displayValue += buttonText;
        }

        $("#display").val(displayValue);
    });
});