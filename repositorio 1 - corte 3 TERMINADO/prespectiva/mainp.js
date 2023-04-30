    /**
     * plantilla utilizada de repositorio anterior
     */

    var WIDTH = window.innerWidth;
    var HEIGHT = window.innerHeight;

    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(WIDTH, HEIGHT);
    renderer.setClearColor(0xDDDDDD, 1);
    document.body.appendChild(renderer.domElement);

    var scene = new THREE.Scene();

    /**
     * CAMARA EN PRESPECTIVA
     * parametros creados para mejor ubiacion
     */

    var camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 1000); 
    camera.position.set(5, 5, 5);
    scene.add(camera);

    var controls = new THREE.OrbitControls(camera, renderer.domElement);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(-1, 2, 4);
    scene.add(light);
    
    const size = 150;
    const divisions = 160;
    const axesHelper = new THREE.AxesHelper(1000);
    scene.add(axesHelper);
    
    const gridHelper = new THREE.GridHelper(size, divisions);
    scene.add(gridHelper);



    /**
 * 
 * @param {tamanio largo del cubo} sideLength 
 *  TRAZADO DEl cubo FUE CREADO CON CHATGPT y buffer tambien fue implementado por este.
 * parametrizacion es segun el usario
 */

    function Geometriakubo(sideLength){

        const vertices = [
            // Cara frontal
            -sideLength / 2, -sideLength / 2, sideLength / 2,
            sideLength / 2, -sideLength / 2, sideLength / 2,
            sideLength / 2, sideLength / 2, sideLength / 2,
            -sideLength / 2, sideLength / 2, sideLength / 2,
            // Cara trasera
            -sideLength / 2, -sideLength / 2, -sideLength / 2,
            sideLength / 2, -sideLength / 2, -sideLength / 2,
            sideLength / 2, sideLength / 2, -sideLength / 2,
            -sideLength / 2, sideLength / 2, -sideLength / 2
          ];
          
          // Definir los índices para formar los triángulos que componen el cubo
          const indices = [
            // Cara frontal
            0, 1, 2,
            0, 2, 3,
            // Cara trasera
            4, 6, 5,
            4, 7, 6,
            // Cara izquierda
            4, 5, 1,
            4, 1, 0,
            // Cara derecha
            3, 2, 6,
            3, 6, 7,
            // Cara superior
            1, 5, 6,
            1, 6, 2,
            // Cara inferior
            4, 0, 3,
            4, 3, 7
          ];
          
          // Crear un buffer con los vértices
          const verticesBuffer = new Float32Array(vertices);
          
          // Crear un buffer con los índices
          const indicesBuffer = new Uint32Array(indices);
          
          // Crear un material y asignarle un color
          const kolor= new THREE.Color({ color: 0xffbdf1 });
          const material = new THREE.MeshBasicMaterial({kolor, wireframe : true});
          
          // Crear la geometría y asignarle los buffers
          const geometry = new THREE.BufferGeometry();
          geometry.setAttribute('position', new THREE.BufferAttribute(verticesBuffer, 3));
          geometry.setIndex(new THREE.BufferAttribute(indicesBuffer, 1));
          
          // Crear la malla y asignarle la geometría y el material
          const cubo = new THREE.Mesh(geometry, material);
          
          // Añadir la malla a la escena
          scene.add(cubo);
          
    }


    Geometriakubo(1);


   
   function render() {
     requestAnimationFrame(render);
     renderer.render(scene, camera);
   }
   
   render();







    