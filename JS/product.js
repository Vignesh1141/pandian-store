function searchTable() {
    let input = document.getElementById('search_input');
    let filter = input.value.toLowerCase();
    let table = document.getElementById('product_table');
    let tr = table.getElementsByTagName('tr');
    let found = false;

    for (let i = 1; i < tr.length; i++) {
        let tdName = tr[i].getElementsByTagName('td')[1];
        if (tdName) {
            let textValue = tdName.textContent || tdName.innerText;
            if (textValue.toLowerCase().indexOf(filter) > -1) {
                tr[i].style.display = '';
                found = true;
            } else {
                tr[i].style.display = 'none';
            }
        }
    }

    if (!found && filter !== "") {
        document.getElementById('NotFound').style.display = 'block';
    } else {
        document.getElementById('NotFound').style.display = 'none';
    }
}

function checkEnter(event) {
    if (event.key === 'Enter') {
        let input = document.getElementById('search_input').value.toLowerCase();
        let table = document.getElementById('product_table');
        let tr = table.getElementsByTagName('tr');
        let found = false;

        for (let i = 1; i < tr.length; i++) {
            let tdName = tr[i].getElementsByTagName('td')[1];
            if (tdName) {
                let textValue = tdName.textContent || tdName.innerText;
                if (textValue.toLowerCase().indexOf(input) > -1) {
                    found = true;
                    break;
                }
            }
        }

        if (!found) {
            document.getElementById('not_Found').style.display = 'block';
        } else {
            document.getElementById('not_Found').style.display = 'none';
        }
    }
}