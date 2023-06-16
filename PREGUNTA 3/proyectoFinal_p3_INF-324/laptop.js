var camera, scene, renderer;
var cameraControls;
var clock = new THREE.Clock();
var ambientLight, light;

function init() {
    var canvasWidth = window.innerWidth * 0.9;
    var canvasHeight = window.innerHeight * 0.9;

    // CAMERA
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 80000);
    camera.position.set(-1, 1, 3);
    camera.lookAt(0, 0, 0);

    // LIGHTS
    light = new THREE.DirectionalLight(0x000000, 0.7);
    light.position.set(1, 1, 1);
    light.target.position.set(0, 0, 0);
    light.target.updateMatrixWorld();

    ambientLight = new THREE.AmbientLight(0x111111);

    // RENDERER
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(canvasWidth, canvasHeight);
    renderer.setClearColor(0x626567, 1.0);
    renderer.gammaInput = true;
    renderer.gammaOutput = true;

    // Add to DOM
    var container = document.getElementById('container');
    container.appendChild(renderer.domElement);

    // CONTROLS
    cameraControls = new THREE.OrbitControls(camera, renderer.domElement);
    cameraControls.target.set(0, 0, 0);

    // OBJECTS

    // Laptop Base
    var laptopBase = new THREE.Mesh(
        new THREE.BoxGeometry(0.9, 0.02, 0.6),
        new THREE.MeshBasicMaterial({ color: 0x17202a})
    );
    laptopBase.position.y = -0.15;

    // Laptop Screen
    var laptopScreen = new THREE.Mesh(
        new THREE.BoxGeometry(0.6, 0.4, 0.004),
        new THREE.MeshBasicMaterial({ color: 0x17202a })
    );
    laptopScreen.position.y = 0.1;
	laptopScreen.position.z = -0.2;

    //camara
    var camMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
    var camGeometry = new THREE.BoxGeometry(0.03, 0.015, 0.005);
    var camMesh = new THREE.Mesh(camGeometry, camMaterial);
    camMesh.position.x = 0;
    camMesh.position.y = 0.185;
    camMesh.position.z = 0.003;
    
    var circleMaterial = new THREE.MeshBasicMaterial({ color: 0x4f4f4f });
    var circleGeometry = new THREE.CircleGeometry(0.006, 32);
    var circleMesh = new THREE.Mesh(circleGeometry, circleMaterial);
    circleMesh.position.x = 0;
    circleMesh.position.y = 0;
    circleMesh.position.z = 0.003;

    camMesh.add(circleMesh);
    laptopScreen.add(camMesh);

    // Laptop Screen 2
    var laptopScreen2 = new THREE.Mesh(
        new THREE.BoxGeometry(0.565, 0.33, 0.0041),
        new THREE.MeshBasicMaterial({ color: 0xd6dbdf })
    );
    laptopScreen2.position.y = 0.1;
	laptopScreen2.position.z = -0.2;
    
    // Cuadrado
    var square = new THREE.Mesh(
        new THREE.BoxGeometry(0.13, 0.13, 0),
        new THREE.MeshBasicMaterial({ color: 0x000000 })
    );
    square.position.x = -0.2;
    square.position.y = 0;
    square.position.z = 0.01;

    // Círculo
    var circleGeometry = new THREE.CircleGeometry(0.08, 32);
    var circleMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    var circle = new THREE.Mesh(circleGeometry, circleMaterial);
    circle.position.x = 0;
    circle.position.y = 0;
    circle.position.z = 0.01;

    // Triángulo
    var triangleGeometry = new THREE.Geometry();
    triangleGeometry.vertices.push(
        new THREE.Vector3(-0.07, 0, 0),
        new THREE.Vector3(0.07, 0, 0),
        new THREE.Vector3(0, 0.14, 0)
    );
    triangleGeometry.faces.push(new THREE.Face3(0, 1, 2));
    triangleGeometry.computeFaceNormals();
    var triangleMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000});
    var triangle = new THREE.Mesh(triangleGeometry, triangleMaterial);
    triangle.position.x = 0.2;
    triangle.position.y = -0.06;
    triangle.position.z = 0.01;

    // Añadir los elementos al escenario
    laptopScreen2.add(square);
    laptopScreen2.add(circle);
    laptopScreen2.add(triangle);


    // Laptop Screen 3
    var laptopScreen3 = new THREE.Mesh(
        new THREE.BoxGeometry(0.6, 0.4, 0.004),
        new THREE.MeshBasicMaterial({ color: 0x939393 })
    );
    laptopScreen3.position.y = 0.1;
	laptopScreen3.position.z = -0.201;

   function createLine(start, end, color) {
        var geometry = new THREE.Geometry();
        geometry.vertices.push(start, end);
        var material = new THREE.LineBasicMaterial({ color: color });
        var line = new THREE.Line(geometry, material);
        laptopScreen3.add(line);
    }

    var lineColor = 0xffffff;

    createLine(new THREE.Vector3(0.03, 0.06, -0.0025), new THREE.Vector3(0.03, -0.0015, -0.0025), lineColor);
    createLine(new THREE.Vector3(0.03, 0.03, -0.0025), new THREE.Vector3(0.01, 0.03, -0.0025), lineColor);
    createLine(new THREE.Vector3(0.01, 0.03, -0.0025), new THREE.Vector3(0.01, -0.0015, -0.0025), lineColor);

    createLine(new THREE.Vector3(-0.001, 0.03, -0.0025), new THREE.Vector3(-0.025, 0.03, -0.0025), lineColor);
    createLine(new THREE.Vector3(-0.001, 0.03, -0.0025), new THREE.Vector3(-0.001, -0.02, -0.0025), lineColor);
    createLine(new THREE.Vector3(-0.025, 0.03, -0.0025), new THREE.Vector3(-0.025, 0.001, -0.0025), lineColor);
    createLine(new THREE.Vector3(-0.025, 0.001, -0.0025), new THREE.Vector3(0.001, 0.001, -0.0025), lineColor);

    var circleRadius = 0.05; // Radio del círculo
    var circleSegments = 32; // Número de segmentos del círculo

    var circleGeometry = new THREE.CircleGeometry(circleRadius, circleSegments);
    var circleMaterial = new THREE.MeshBasicMaterial({ color: 0x283747, side: THREE.DoubleSide });
    var circle = new THREE.Mesh(circleGeometry, circleMaterial);
    circle.position.set(0.008, 0.025, -0.0025); // Posición del círculo
    laptopScreen3.add(circle);

    
    // Keyboard
    var keyboard = new THREE.Mesh(
		new THREE.BoxGeometry(0.6, 0.004, 0.4),
		new THREE.MeshBasicMaterial({ color: 0x939393 })
	);
    keyboard.position.y = -0.1;


    // Keyboard base
    var keyboard2 = new THREE.Mesh(
		new THREE.BoxGeometry(0.6, 0.01, 0.4),
		new THREE.MeshBasicMaterial({ color: 0x939393 })
	);
    keyboard2.position.y = -0.10001;

    var portMaterial = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.DoubleSide });
    var lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });

    var portWidth = 0.02;
    var portHeight = 0.01;
    var lineOffset = 0.009;

    var totalPorts = 5;
    var portSpacing = 0.045;
    var startOffsetZ = -0.9 * (totalPorts - 1) * 0.5;

    for (var i = 0; i < totalPorts; i++) {
        var portPosZ = startOffsetZ + i * portSpacing;
        var portGeometry = new THREE.PlaneGeometry(portWidth, portHeight);
        var port = new THREE.Mesh(portGeometry, portMaterial);
        port.position.set(-0.301, 0, portPosZ+1.7);
        port.rotation.y = Math.PI / 2; 
        keyboard2.add(port);

        var barrGeometry = new THREE.BoxGeometry(lineOffset, 0.007, 0.0001);
        var barrMaterial = new THREE.MeshBasicMaterial({ color: 0xFF000000 });
        var barr = new THREE.Mesh(barrGeometry, barrMaterial);
        barr.position.set(lineOffset-0.62 / 2, 0, portPosZ+1.7);
        barr.rotation.y = Math.PI / 2;

        keyboard2.add(barr);
    }

    var portMaterial2 = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.DoubleSide });
    var portPosZ2 = -1.85;
    var portGeometry2 = new THREE.PlaneGeometry(0.02, 0.01);
    var port2 = new THREE.Mesh(portGeometry2, portMaterial2);
    port2.position.set(0.301, 0, portPosZ2+1.7);
    port2.rotation.y = Math.PI / 2; 
    keyboard2.add(port2);

    var barrGeometry2 = new THREE.BoxGeometry(0.009, 0.007, 0.0001);
    var barrMaterial2 = new THREE.MeshBasicMaterial({ color: 0xFF939393 });
    var barr2 = new THREE.Mesh(barrGeometry2, barrMaterial2);
    barr2.position.set(0.604 / 2, 0, portPosZ2+1.7);
    barr2.rotation.y = Math.PI / 2;

    keyboard2.add(barr2);



    // Lineas
    var lineMaterial = new THREE.LineBasicMaterial({ color: 0x34495e});
    for (var i = 0; i < 20; i++) {
        var lineGeometry = new THREE.Geometry();
        lineGeometry.vertices.push(
            new THREE.Vector3(-0.25, -0.10001, -0.18 - i * 0.0045), // Primer punto
            new THREE.Vector3(0.25, -0.10001, -0.18 - i * 0.0045) // Segundo punto
        );
        var line = new THREE.Line(lineGeometry, lineMaterial);
        line.position.y = 0.094;
        line.position.z = 0.13;
        keyboard2.add(line);
    }

    //Tornillos
    var screwMaterial = new THREE.MeshBasicMaterial({ color: 0x34495e, side: THREE.DoubleSide });
    var screwWidth = 0.007;
    var screwHeight = 0.007;

    var screwsPerRow = [4, 3, 4];

    var totalRows = screwsPerRow.length;
    var rowOffset = 0.13;
    var columnOffset = 0.18; 

    for (var row = 0; row < totalRows; row++) {
    var screwsInRow = screwsPerRow[row];
    var startOffsetX = -(screwsInRow - 1) * columnOffset * 0.5;

        for (var i = 0; i < screwsInRow; i++) {
            var screwPosX = startOffsetX + i * columnOffset;
            var screwPosZ = 0.1 - row * rowOffset;

            var screwGeometry = new THREE.PlaneGeometry(screwWidth, screwHeight);
            var screw = new THREE.Mesh(screwGeometry, screwMaterial);
            screw.position.set(screwPosX, -0.01, screwPosZ);
            screw.rotation.x = -Math.PI / 2;

            
            keyboard2.add(screw);
        }
        
    }
    
  

    // Key mappings
    var keySize = 0.026;
    var keySpacing = 0.01;

    var keyMap = [
        ["Esc", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "Impr", "Bloq", "On/Off"],
        ["º", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Clear", " "],
        ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", " ", "Enter"],
        ["Caps Lock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "|", "Enter2", " "],
        ["Shift", "~", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", " ", "Shift2", " "],
        ["In", "Ctrl", "Win", "Alt", " ", " ", "Space", " ", " ", "Alt", "Ctrl", "Win", "left", "up/down", "right"]
    ];

    var keyGroup = new THREE.Group();
    var startX = 0;
    var startY = 0.002;

    for (var row = 0; row < keyMap.length; row++) {
        var keysInRow = keyMap[row].length;
        startX = -(keysInRow * (keySize + keySpacing)) / 2;
		for (var i = 0; i < keysInRow; i++) {
			var keyLabel = keyMap[row][i];
	
			if (keyLabel === "Space") {
                var key = new THREE.Mesh(
                    new THREE.BoxGeometry(keySize+0.1, 0.01, keySize),
                    new THREE.MeshBasicMaterial({ color: 0x000000 })
                );

                key.position.x = startX + i * (keySize + keySpacing);
                key.position.z = row * (keySize + keySpacing);
                
                
			}
            else if (keyLabel === "Enter") {
                var key = new THREE.Mesh(
                    new THREE.BoxGeometry(keySize, 0.01, keySize+0.025),
                    new THREE.MeshBasicMaterial({ color: 0x000000 })
                );

                key.position.x = startX + i * (keySize + keySpacing);
                key.position.z = 0.015 + row * (keySize + keySpacing);
			}
            else if (keyLabel === "Enter2") {
                var key = new THREE.Mesh(
                    new THREE.BoxGeometry(keySize+0.02, 0.01, keySize),
                    new THREE.MeshBasicMaterial({ color: 0x000000 })
                );

                key.position.x = startX + i * (keySize + keySpacing + 0.0015);
                key.position.z = row * (keySize + keySpacing);
			}
            else if (keyLabel === "Shift2") {
                var key = new THREE.Mesh(
                    new THREE.BoxGeometry(keySize+0.014, 0.01, keySize),
                    new THREE.MeshBasicMaterial({ color: 0x000000 })
                );
                key.position.x = startX + i * (keySize + keySpacing +0.00025);
                key.position.z = row * (keySize + keySpacing);
			}
            else if (keyLabel === "up/down"){
                var key = new THREE.Mesh(
                    new THREE.BoxGeometry(keySize, 0.01, keySize),
                    new THREE.MeshBasicMaterial({ color: 0x000000 })
                );

                var barGeometry = new THREE.BoxGeometry(keySize, 0.011, 0.003);
                var barMaterial = new THREE.MeshBasicMaterial({ color: 0xFF939393 });
                var bar = new THREE.Mesh(barGeometry, barMaterial);
                bar.position.y = 0;
                key.add(bar);

                key.position.x = startX + i * (keySize + keySpacing);
                key.position.z = row * (keySize + keySpacing);
            }
            else {
                var key = new THREE.Mesh(
                    new THREE.BoxGeometry(keySize, 0.01, keySize),
                    new THREE.MeshBasicMaterial({ color: 0x000000 })
                );
                key.position.x = startX + i * (keySize + keySpacing);
                key.position.z = row * (keySize + keySpacing);
            }
			
			key.position.y = startY;
			
			keyGroup.add(key);
		}
	
		startY = 0.002;
	}
	
	
	keyGroup.position.z = -0.14;
    keyGroup.position.x = 0.015;
    keyboard.add(keyGroup);
    
    // Touchpad
    var touchpad = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 0.01, 0.12),
        new THREE.MeshBasicMaterial({ color: 0x566573 })
    );
    touchpad.position.y = 0.0013;
    touchpad.position.z = 0.125;
    keyboard2.add(touchpad);

    // Touchpad buttons
    var buttonSize = 0.03;

    var button1 = new THREE.Mesh(
        new THREE.BoxGeometry(buttonSize+0.065, 0.01, buttonSize),
        new THREE.MeshBasicMaterial({ color: 0x34495e })
    );
    button1.position.x = -0.05;
    button1.position.y = 0.0014;
    button1.position.z = 0.165;
    keyboard2.add(button1);

    var button2 = new THREE.Mesh(
        new THREE.BoxGeometry(buttonSize+0.065, 0.01, buttonSize),
        new THREE.MeshBasicMaterial({ color: 0x34495e })
    );
    button2.position.x = 0.05;
    button2.position.y = 0.0014;
    button2.position.z = 0.165;
    keyboard2.add(button2);
    
	// Laptop
	var laptop = new THREE.Group();
	laptop.add(laptopScreen, laptopScreen2, laptopScreen3,  keyboard, keyboard2 );


	// SCENE
	scene = new THREE.Scene();
	scene.add(ambientLight);
	scene.add(light);
	scene.add(laptop);
}

function animate() {
requestAnimationFrame(animate);
render();
update();
}

function update() {
var delta = clock.getDelta();
cameraControls.update(delta);
}

function render() {
renderer.render(scene, camera);
}



// Run the functions
init();
animate();	