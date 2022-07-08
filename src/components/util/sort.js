export const carets = {
  down: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16"><path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/></svg>, 
  down_active: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16"><path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>,
  up_active: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16"><path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/></svg>
}

export const sort = (col) => {
  let i, curr, next, needsSwap, dir, switchcount = 0;
  let table = document.getElementsByTagName("tbody");
  let sorting = true;
  let rows = table[0].rows;
  
  // Reset carets in headers
  let headers = document.getElementsByTagName("thead")[0].rows[0].getElementsByTagName("th");
  for (i = 0; i < (headers.length - 1); i++) {
    let text = headers[i].textContent;
    headers[i].innerHTML = `${text} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16"><path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/></svg>`;
  }

  // Set the sorting direction to ascending and set active caret:
  dir = "asc";
  let text = headers[col].textContent;
  headers[col].innerHTML = `${text} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16"><path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>`;
  // Continue until nothing has been sorting
  while (sorting) {
    // Start with no sorting done:
    sorting = false;
    // Iterate all rows
    for (i = 0; i < (rows.length - 1); i++) {
      // Start with nothing needing to be swapped:
      needsSwap = false;
      // Compare current row data to next row data
      curr = rows[i].getElementsByTagName("td")[col];
      next = rows[i + 1].getElementsByTagName("td")[col];
      // Check if rows need swap - asc or desc
      if (dir == "asc") {
        if (curr.textContent.toLowerCase() > next.textContent.toLowerCase()) {
          needsSwap = true;
          break;
        }
      } else if (dir == "desc") {
        if (curr.textContent.toLowerCase() < next.textContent.toLowerCase()) {
          needsSwap = true;
          break;
        }
      }
    }
    if (needsSwap) {
      // Swap and mark sorting as done
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      sorting = true;
      // Each time a switch is done, increase this count by 1:
      switchcount ++;
    } else {
      // If no sorting done AND the direction is "asc", set the direction to "desc" and repeat sort, flip caret
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        sorting = true;
        let text = headers[col].textContent;
        headers[col].innerHTML = `${text} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16"><path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/></svg>`;
      }
    }
  }

}