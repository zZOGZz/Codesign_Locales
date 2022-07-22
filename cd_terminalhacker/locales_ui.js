/*CONFIGURATION VARIABLES*/
var CONFIG_MAXITERATIONS = 1; // The maximum amount of times we're going to iterate through each subfolder - i.e. A folder can have a maximum of 1 folders
var CONFIG_DATEFORMAT = "DD/MM/YYYY"; // Moment.js formatting
/*ENVIRONMENT VARIABLES*/
var ENV_FOLDERNAMES = ["New Folder", "Screenshots", "Games", "My files", "Photos", "Clipboard", "Important stuff", "USB", "USB BACKUP", "DO NOT TOUCH", "Gentacular", "TEST FOLDER", "New Folder", "Remixes", "Job", "Security", "PDFs", "Random", "pom", "Filesystem", "Movies", "Trip", "Employees", "Assignments", "Transfers", "Fields", "Anomaly", "Trap", "Exports", "Referee", "Signals", "system32", "Trapdoor", "CDSGN", "RMP", "PCI", "CACHE", "LOCAL", "College", "Funding", "Allfiles", "Program Files", "Transfer Files", "ABC", "Copyright", "Copy", "Copy2", "Copy3", "Absolute", "Keytech", "Coretech", "Codetech"]; // Folder names - you can enter and leave these - wow
// Regular file names - they do nothing, just look pretty
var ENV_FILENAMES = ["sounds.mp3", "lucy.jpeg", "irene.png", "transfer.txt", "job_billboard.png", "job_billboard2.png", "profilepic.jpg", "jobstuff.pdf", "mailinglist.pdf", "expenses.xlcs", "expenses2.xlcs", "toread.docx", "savedtoread.docx", "config.cfg", "guide.txt", "savefile.txt", "transfer.c", "myprogram.c", "myprogram.cpp", "testfile.pdf", "jackie.jpg", "happyfeet.mov", "celebration.ogg", "codesign.pro", "shoppinglist.docx", "finances.txt", "epsilonprogram.rar", "filesystem.zip", "moneystatus.rar", "ad.mov", "culpa.wav", "occaecati.pages", "inventore.xls", "error.xlsx", "dolore.jpg", "voluptates.mov", "inventore.flac", "rerum.flac", "similique.pdf", "esse.ppt", "quam.flac", "sapiente.html", "officia.webm", "magnam.wav", "enim.png", "libero.txt", "doloremque.txt", "laborum.css", "esse.xlsx", "ad.jpeg", "consequuntur.html", "voluptate.jpg", "nisi.ods", "est.bmp", "fugit.txt", "voluptate.png", "sapiente.csv", "doloribus.css", "distinctio.webm", "mollitia.csv", "nemo.mov", "fugit.gif", "vel.avi", "quos.mov", "eaque.odp", "veniam.webm", "laudantium.mp3", "eius.flac", "ad.key", "aliquid.jpeg", "fugit.css", "a.jpg", "cumque.flac", "fuga.avi", "fugit.odp", "illum.txt", "tempore.txt", "mollitia.png", "earum.pptx", "tempore.wav", "incidunt.flac", "minus.csv", "harum.mov", "accusamus.flac", "nam.mp3", "veniam.mp4", "ullam.txt", "deleniti.html", "optio.csv", "sapiente.ods", "laborum.tiff", "ratione.js", "architecto.mp4", "quo.tiff", "architecto.jpg", "beatae.wav", "cupiditate.csv", "adipisci.bmp", "consequuntur.mp4", "tempore.key", "reiciendis.bmp", "illo.css", "impedit.webm", "dolorum.flac", "vel.jpg", "totam.flac", "nesciunt.jpeg", "consequatur.docx", "libero.json", "quidem.pdf", "sunt.bmp", "officia.doc", "animi.tiff", "quod.json", "minima.flac", "et.txt", "nostrum.js", "exercitationem.webm", "ex.jpg", "quisquam.wav", "ea.avi", "labore.csv", "natus.jpg", "alias.wav", "perferendis.wav", "adipisci.gif", "maiores.bmp", "possimus.js", "qui.numbers"]; 
// Exec file names - files that allow the player to win the game
var ENV_EXECNAMES = ["ILOVEYOU.exe", "codered.exe", "melissa.exe", "sasser.exe", "zeus.exe", "conficker.exe", "stuxnet.exe", "mydoom.exe", "cryptolocker.exe", "flashback.exe", "notavirus.exe"]; 
// Bogus file names - files that set the player back
var ENV_BOGUSNAMES = ["refresh.exe", "restart.exe", "combust.exe", "gman.exe", "billgates.exe", "greedisgood.exe", "moneymoneymoney.exe", "hack.exe"]; 
// Possible hostnames
var ENV_HOSTNAMES = ["cdt.pc", "cdsgn", "srvr", "linux"];
/*GENERATION VARIABLES*/
var GEN_FOLDERCREATE_CHANCE = .3; // 70%
var GEN_FILECREATE_CHANCE = .5; // 50%
var GEN_EXECREATE_CHANCE = .8;  // 20%
var GEN_BOGUSCREATE_CHANCE = .8;// 20%

var GEN_MAXFILES = 5;
var GEN_MAXFOLDERS = 3;

var ENV_BOGUSSTART = [
    `<div class='cd-terminal-line'>Attempting to open file</div>`,
    `<div class='cd-terminal-line'>Opening file.</div>`,
    `<div class='cd-terminal-line'>Opening file..</div>`,
    `<div class='cd-terminal-line'>Opening file...</div>`,
    `<div class='cd-terminal-line'>Opening file.</div>`,
    `<div class='cd-terminal-line'>Opening file..</div>`,
    `<div class='cd-terminal-line'>Opening file...</div>`,
    `<div class='cd-terminal-line'>----------------------------------------</div>`,
    `<div class='cd-terminal-line'>Are you sure you want to turn the anti virus on? Y/N</div>`,
    `<div class='cd-terminal-line'>Y</div>`,
    `<div class='cd-terminal-line'>10%</div>`,
    `<div class='cd-terminal-line'>12%</div>`,
    `<div class='cd-terminal-line'>13%</div>`,
    `<div class='cd-terminal-line'>15%</div>`,
    `<div class='cd-terminal-line'>25%</div>`,
    `<div class='cd-terminal-line'>25.5%</div>`,
    `<div class='cd-terminal-line'>25.8%</div>`,
    `<div class='cd-terminal-line'>26%</div>`,
    `<div class='cd-terminal-line'>30%</div>`,
    `<div class='cd-terminal-line'>35%</div>`,
    `<div class='cd-terminal-line'>40%</div>`,
    `<div class='cd-terminal-line'>50%</div>`,
    `<div class='cd-terminal-line'>55%</div>`,
    `<div class='cd-terminal-line'>60%</div>`,
    `<div class='cd-terminal-line'>70%</div>`,
    `<div class='cd-terminal-line'>80%</div>`,
    `<div class='cd-terminal-line'>90%</div>`,
    `<div class='cd-terminal-line'>99%</div>`,
    `<div class='cd-terminal-line'>99%</div>`,
    `<div class='cd-terminal-line'>99%</div>`,
    `<div class='cd-terminal-line'>99%</div>`,
    `<div class='cd-terminal-line'>99%</div>`,
    `<div class='cd-terminal-line'>Backup complete</div>`,
    `<div class='cd-terminal-line'>Are you sure you want to disconnect all users? Y/N</div>`,
    `<div class='cd-terminal-line'>Y</div>`,
    `<div class='cd-terminal-line'>Session terminated.</div>`
]

var ENV_EXECSTART = [
    `Starting hack...`,
    `Transfering filesystem...`,
    `.`,
    `..`,
    `...`,
    `....`,
    `.....`,
    `......`,
    `.......`,
    `........`,
    `.........`,
    `..........`,
    `Transfer complete.`,
    `Removing relevant files and folders`,
    `Removing system32`,
    `You have been disconnected from the remote machine`,
    `HACK COMPLETE`
]

var ENV_HELP = [
    `<span class="cd-terminal-text-link">Commands</span>`,
    `<span class="font-weight-bold">ssh hostname@ip</span>&nbsp;&nbsp;&nbsp;&nbsp;Attempts to connect to the remote server. Will prompt for a password if successful.`,
    `<span class="font-weight-bold">scoreboard</span>&nbsp;&nbsp;&nbsp;&nbsp;Prints the current scoreboard.`,
    `<span class="font-weight-bold">dir</span>&nbsp;&nbsp;&nbsp;&nbsp;View files and folders in the current directory. Displays date created, type, size (if applicable), and name.`,
    `<span class="font-weight-bold">cd directory</span>&nbsp;&nbsp;&nbsp;&nbsp; Find and change to a directory with the same name`,
    `&nbsp;<span class="font-weight-bold">cd ..</span>&nbsp;&nbsp;&nbsp;&nbsp; Go 1 directory back`,
    `<span class="font-weight-bold">cls</span>&nbsp;&nbsp;&nbsp;&nbsp; Clears the screen`,
    `<span class="font-weight-bold">start filename.exe</span>&nbsp;&nbsp;&nbsp;&nbsp; Starts a .exe file.`,
    `<span class="font-weight-bold">download filename</span>&nbsp;&nbsp;&nbsp;&nbsp;Downloads a file of importance.`,
    `<span class="font-weight-bold">extract filename</span>&nbsp;&nbsp;&nbsp;&nbsp;Extracts contents of a .rar or .zip archive in the current folder.`,
    `<span class="font-weight-bold">exit</span>&nbsp;&nbsp;&nbsp;&nbsp;Ends the session and closes the terminal.`
];
var ENV_START = [
    `Codesign Terminal [Version 1.0.0]`,
    `Copyright (c) 2020 Codesign Scripts. All rights reserved.`,
    `&nbsp;`,
    `<pre class="cd-terminal-line" style="font-size:.7rem"> 
    _______ _______  ______ _______ _____ __   _ _______             _     _ _______ _______ _     _ _______  ______
       |    |______ |_____/ |  |  |   |   | \\  | |_____| |           |_____| |_____| |       |____/  |______ |_____/
       |    |______ |    \\_ |  |  | __|__ |  \\_| |     | |_____      |     | |     | |_____  |    \\_ |______ |    \\_
   </pre>`,
    `--------------------------------------------------`,
    `Your remote hacking attempt was unsuccessful.`,
    `The anti-virus discovered the program and saved it somewhere for later analysis.`,
    `It's your job to find it and run the hack from the machine itself.`,
    `The anti-virus planted fake .exe files in the filesystem hoping you would mess up.`,
    `We've managed to disable it for now, just do not open those files!`,
    `You need to find the right .exe file to your hack and start it!`,
    `That should get us all the files we need and destroy their system.`,
    `If you find some bonus files along the way try to keep them. They might be useful.`,
    `--------------------------------------------------`
]
function connecting(ip, hostname, fingerprint, success){
    let ENV_CONNECTING;

    if(success){
        ENV_CONNECTING = [
            `SSH Connecting to ${hostname}@${ip}`,
            `Logging in...`,
            `Host key fingerprint: `,
            `SHA256 ${fingerprint}`,
            `Connection successful.`,
            `Welcome to CDT.PC Version 20B3.28.08`
        ]
    } else {
        ENV_CONNECTING = [
            `SSH Connecting...`,
            `Connection failed`
        ]
    }

    return ENV_CONNECTING;
}