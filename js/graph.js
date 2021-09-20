const graphSize = 40;
var arr = [];
var max = 0;
var sortStatus = false;
var sorting = false;

window.onload = function() {
    buildPlot();
    buildGraph();
};

//Generates an array of 25 random values from 1 to 200
function buildGraph() {
    if (!sorting) {
        sorting = true;
        sortStatus = true;
        arr = [];
        for (let i = 0; i < graphSize; i++) {
            var num = Math.floor((Math.random() * 200) + 1);
            arr.push(num);
        }
        console.log(arr);

        //populates the graph at correct heights
        grapher();
        max = Math.max.apply(null, arr);
        sortStatus = false;
        sorting = false;
    }
}

function buildPlot() {

    for (let i = 0; i < graphSize; i++) {
      const progressBar = document.createElement('div');
      progressBar.classList.add('myProgress');
      // setting the class to item and active
      const inner = document.createElement('div');
      inner.classList.add('myBar');
  
      progressBar.appendChild(inner);
  
      document.getElementById('graph').appendChild(progressBar);
    }
  
}

function grapher() {
    const elem = document.getElementsByClassName('myBar');
    //populates the graph at correct heights
    for (let i = 0; i < graphSize; i++) {
        elem[i].style.height = `${(arr[i] / max) * 100}%`;
        elem[i].style.background = 'black';
    }
}

// ------------ BUBBLE SORT -----------------
function bubbleSortGrapher(x, count) {
    const elem = document.getElementsByClassName('myBar');
    //populates the graph at correct heights
    for (let i = 0; i < graphSize; i++) {
        elem[i].style.height = `${(arr[i] / max) * 100}%`;
         if (i > graphSize - count - 1) {
            elem[i].style.background = 'green';
        } else if (i == x || i == x + 1) {
            elem[i].style.background = 'orange';
        } else {
            elem[i].style.background = 'black';
        }
    }
}

function bubbleSortedGrapher() {
    const elem = document.getElementsByClassName('myBar');
    //populates the graph at correct heights
    for (let i = 0; i < graphSize; i++) {
        elem[i].style.height = `${(arr[i] / max) * 100}%`;
        elem[i].style.background = 'green';
    }
}

// Bubble Sort: Best: O(n), Worst: 0(n^2), Average: O(n^2)
async function bubbleSort() {
    if (!sorting && !sortStatus) {
        sorting = true;
        sortStatus = true;
        let sorted = false;
        let count = 0;

        while (!sorted) {
            
            sorted = true;
            for (let i = 0; i < arr.length - 1 - count; i++) {
                bubbleSortGrapher(i, count);
                await wait(20);
                
                if (arr[i] > arr[i+1]){
                    const temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i+1] = temp;
                    sorted = false;
                }
            }
            count++;    
        }
        sorted = false;
        while (!sorted) {
            sorted = true;
            for (let i = 0; i < arr.length - 1; i++) {
                if (arr[i] > arr[i+1]) {
                    sorted = false;
                    break;
                }
            }
            await wait(50);
            if (sorted){
                sorting = false;
            } 
        }
        bubbleSortedGrapher();
        await wait(20);
    }
}

// ------------ INSERTION SORT -----------------
function insertionSortGrapher(x, count) {
    const elem = document.getElementsByClassName('myBar');
    //populates the graph at correct heights
    for (let i = 0; i < graphSize; i++) {
        elem[i].style.height = `${(arr[i] / max) * 100}%`;
         if (i == x || i == x + 1) {
            elem[i].style.background = 'orange';
        } else if (i < count) {
            elem[i].style.background = 'green';
        } else  {
            elem[i].style.background = 'black';
        }
    }
}

function insertionSortedGrapher() {
    const elem = document.getElementsByClassName('myBar');
    //populates the graph at correct heights
    for (let i = 0; i < graphSize; i++) {
        elem[i].style.height = `${(arr[i] / max) * 100}%`;
        elem[i].style.background = 'green';
    }
}

// Bubble Sort: Best: O(n), Worst: 0(n^2), Average: O(n^2)
async function insertionSort() {
    if (!sorting && !sortStatus) {
        sorting = true;
        sortStatus = true;
        for (let i = 1; i < graphSize; i++) {
            // Choosing the first element in our unsorted subarray
            let current = arr[i];
            // The last element of our sorted subarray
            let j = i-1; 
            while ((j > -1) && (current < arr[j])) {
                insertionSortGrapher(j, i);
                await wait(20);
                arr[j+1] = arr[j];
                j--;
            }
            arr[j+1] = current;
        }
        let sorted = false;
        while (!sorted) {
            sorted = true;
            for (let i = 0; i < arr.length - 1; i++) {
                if (arr[i] > arr[i+1]) {
                    sorted = false;
                    break;
                }
            }
            await wait(50);
            if (sorted){
                sorting = false;
            } 
        }
        console.log(arr);
        insertionSortedGrapher();
        await wait(20);
    }
}

// ------------ SELECTION SORT -----------------
function selectionSortGrapher(x, y, min) {
    const elem = document.getElementsByClassName('myBar');
    //populates the graph at correct heights
    for (let i = 0; i < graphSize; i++) {
        elem[i].style.height = `${(arr[i] / max) * 100}%`;
         if (i == x || i == min) {
            elem[i].style.background = 'orange';
        } else if (i == y) {
            elem[i].style.background = 'red';
        } else if (i < x) {
            elem[i].style.background = 'green';
        } else  {
            elem[i].style.background = 'black';
        }
    }
}

function selectionSortedGrapher() {
    const elem = document.getElementsByClassName('myBar');
    //populates the graph at correct heights
    for (let i = 0; i < graphSize; i++) {
        elem[i].style.height = `${(arr[i] / max) * 100}%`;
        elem[i].style.background = 'green';
    }
}

// Selection Sort: Best: O(n), Worst: 0(n^2), Average: O(n^2)
async function selectionSort() {
    if (!sorting && !sortStatus) {
        sorting = true;
        sortStatus = true;
        for(let i = 0; i < graphSize; i++) {
            
            // Finding the smallest number in the subarray
            let min = i;
            for(let j = i+1; j < graphSize; j++){
                selectionSortGrapher(i, j, min);
                await wait(20);
                if(arr[j] < arr[min]) {
                    min=j; 
                }
            }
            if (min != i) {
                // Swapping the elements
                let tmp = arr[i]; 
                arr[i] = arr[min];
                arr[min] = tmp;      
            }
        }
        let sorted = false;
        while (!sorted) {
            sorted = true;
            for (let i = 0; i < arr.length - 1; i++) {
                if (arr[i] > arr[i+1]) {
                    sorted = false;
                    break;
                }
            }
            await wait(50);
            if (sorted){
                sorting = false;
            } 
        }
        console.log(arr);
        selectionSortedGrapher();
        await wait(20);
    }
}

// ------------ QUICK SORT -----------------
function quickSortGrapher(x, y, min, l, r) {
    const elem = document.getElementsByClassName('myBar');
    //populates the graph at correct heights
    for (let i = 0; i < graphSize; i++) {
        elem[i].style.height = `${(arr[i] / max) * 100}%`;
         if (i == x || i == y) {
            elem[i].style.background = 'orange';
        } else if (i == min) {
            elem[i].style.background = 'red';
        } else if (i < l || i > r) {
            elem[i].style.background = 'purple';
        } else  {
            elem[i].style.background = 'black';
        }
    }
}

function quickSortedGrapher() {
    const elem = document.getElementsByClassName('myBar');
    //populates the graph at correct heights
    for (let i = 0; i < graphSize; i++) {
        elem[i].style.height = `${(arr[i] / max) * 100}%`;
        elem[i].style.background = 'green';
    }
}

// Quick Sort: Best: O(nlog(n)), Worst: 0(n^2), Average: O(nlog(n))
async function quickSort () {
    if (!sorting && !sortStatus) {
        sorting = true;
        sortStatus = true;
        await quickSortHelper(arr, 0, arr.length - 1);
    }
    
}

async function quickSortHelper(array, startIdx, endIdx) {
    if (startIdx >= endIdx) return;
    const pivotIdx = startIdx;
    let leftIdx = startIdx + 1;
    let rightIdx = endIdx;
    while (rightIdx >= leftIdx) {
        console.log(arr);
        quickSortGrapher(leftIdx, rightIdx, pivotIdx, leftIdx, rightIdx);
        await wait(50);
        if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) {
            swap(leftIdx, rightIdx, array);
        }
        if (array[leftIdx] <= array[pivotIdx]) leftIdx++;
        if (array[rightIdx] >= array[pivotIdx]) rightIdx--;

    }
    swap(pivotIdx, rightIdx, array);
    console.log(arr);
    quickSortGrapher(leftIdx, rightIdx, pivotIdx, leftIdx, rightIdx);
    await wait(50);
    const leftSub = rightIdx - 1 - startIdx < endIdx - (rightIdx + 1);
    if (leftSub) {
        quickSortHelper(array, startIdx, rightIdx - 1);
        quickSortHelper(array, rightIdx + 1, endIdx);
    } else {
        quickSortHelper(array, rightIdx + 1, endIdx);
        quickSortHelper(array, startIdx, rightIdx - 1);
    }

    let sorted = true;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i+1]) {
            sorted = false;
            break;
        }
    }
    await wait(50);
    if (sorted){
        quickSortedGrapher();
        sorting = false;
    } 
}

function swap(i, j, array) {
    let temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}
// ------------ RADIX SORT -----------------
async function radixSort() {
    if (!sorting && !sortStatus) {
        sorting = true;
        sortStatus = true;
        if (arr.length === 0) return arr;

        const maxnumber = Math.max(...arr);

        let digit = 0;
        while (maxnumber / 10 ** digit > 0) {
            countingSort(arr, digit);
            digit++;
            selectionSortedGrapher();
            await wait(1000);
            
            let sorted = true;
            for (let i = 0; i < arr.length - 1; i++) {
                if (arr[i] > arr[i+1]) {
                    sorted = false;
                    break;
                }
            }
            if (sorted){
                sorting = false;
                break;
            } 
        }
        return arr;
    }
}

async function countingSort(array, digit) {
    const sortedArray = new Array(array.length).fill(0);
    const countArray = new Array(10).fill(0);

    const digitColumn = 10 ** digit;
    for (const num of array) {
        const countIndex = Math.floor(num / digitColumn) % 10;
        countArray[countIndex]++;
    }

    for (let idx = 1; idx < 10; idx++) {
        countArray[idx] += countArray[idx - 1];
    }

    for (let idx = array.length - 1; idx > -1; idx--) {
        const countIndex = Math.floor(array[idx] / digitColumn) % 10;
        countArray[countIndex]--;
        const sortedIndex = countArray[countIndex];
        sortedArray[sortedIndex] = array[idx];
    }

    for (let idx = 0; idx < array.length; idx++) {
        array[idx] = sortedArray[idx];
    }
}

// ------------ MERGE SORT -----------------
function mergeSortGrapher(x, y, min) {
    const elem = document.getElementsByClassName('myBar');
    //populates the graph at correct heights
    for (let i = 0; i < graphSize; i++) {
        elem[i].style.height = `${(arr[i] / max) * 100}%`;
         if (i == x || i == min) {
            elem[i].style.background = 'orange';
        } else if (i == y) {
            elem[i].style.background = 'red';
        } else if (i < x) {
            elem[i].style.background = 'green';
        } else  {
            elem[i].style.background = 'black';
        }
    }
}

function mergeSortedGrapher() {
    const elem = document.getElementsByClassName('myBar');
    //populates the graph at correct heights
    for (let i = 0; i < graphSize; i++) {
        elem[i].style.height = `${(arr[i] / max) * 100}%`;
        elem[i].style.background = 'green';
    }
}

// Merge Sort: Best: O(nlog(n)), Worst: O(nlog(n)), Average: O(nlog(n))
function mergeSort() {
    if (!sorting && !sortStatus) {
        sorting = true;
        sortStatus = true;
        arr = mergeSortHelper(arr);
        selectionSortedGrapher();
        sorting = false;
    }
}

function mergeSortHelper(array) {
    if (array.length <= 1) return array;
    const middleIdx = Math.floor(array.length / 2);
    console.log(middleIdx);
    const leftHalf = array.slice(0, middleIdx);
    console.log(leftHalf);
    const rightHalf = array.slice(middleIdx);
    console.log(rightHalf);
    return mergeSortedArrays(mergeSortHelper(leftHalf), mergeSortHelper(rightHalf));
}

function mergeSortedArrays(leftHalf, rightHalf){
    const sortedArray = new Array(leftHalf.length + rightHalf.length);
    let k = 0;
    let i = 0;
    let j = 0;
    while (i < leftHalf.length && j < rightHalf.length) {
        if (leftHalf[i] <= rightHalf[j]) {
            sortedArray[k++] = leftHalf[i++];
        } else {
            sortedArray[k++] = rightHalf[j++];
        }
    }
    while ( i < leftHalf.length) {
        sortedArray[k++] = leftHalf[i++];
    }
    while ( j < rightHalf.length) {
        sortedArray[k++] = rightHalf[j++];
    }
    
    return sortedArray;
}

// ------------- Delay --------------
function wait(ms) {
    return new Promise( resolve => {
        setTimeout(() => {resolve('')}, ms);
    })
}

