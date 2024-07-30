function task1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Task 1 Complete");
      }, 1000);
    });
  }
  
  function task2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Task 2 Complete");
      }, 2000);
    });
  }
  
  function task3() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Task 3 Complete");
      }, 3000);
    });
  }

  
  async function runTasksSequential() {
    console.time("Sequential");
    try {
      const result1 = await task1();
      console.log(result1);
      const result2 = await task2();
      console.log(result2);
      const result3 = await task3();
      console.log(result3);
    } catch (error) {
      console.error("Error:", error);
    }
    console.timeEnd("Sequential");
  
    // 예상되는 대략적인 시간과 그 이유 < 6초 >
    // 작업을 비동기적으로 처리하고 있으나, 한꺼번에 처리하고 있지는 않기 때문에 
    // 각 작업 마다 3초 ,2초 , 1초 씩 걸리기에 = 6초가 걸린다고 생각합니다. 
  }
  

  async function runTasksParallel() {
    console.time("Parallel");
    try {
      // 병렬로 promise들을 한 번에 처리하는 코드
      const takes = [task1(),task2(),task3()];
      await Promise.all(takes);
    } catch (error) {
      console.error("Error:", error);
    }
    console.timeEnd("Parallel");
    // 예상되는 대략적인 시간과 그 이유 < 빈칸 3 >
  }
  
  // // 함수 호출
  // 순차 실행
  runTasksSequential()
  .then(() =>  {
    //병렬 처리
    runTasksParallel() 
  });