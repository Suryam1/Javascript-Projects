let board_size=prompt();

function print(data){
    for(let i=1;i<=data;i++){
        for(let j=1;j<=data;j++){
            if(i%2!=0 && j%2!=0){
                document.write("*");
            }
            else if(i%2!=0 && j%2==0){
                document.write("#");
            }
            else if(i%2==0 && j%2!=0){
                document.write("#");
            }
            else if(i%2==0 && j%2==0){
                document.write("*");
            }
        }
        newLine();
    }
}
function newLine(){
    document.write(`<br>`);
}


print(board_size);