const ProgressChart = ({
  completedLessons,
  completedQuizzes,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">

      <h1 className="text-3xl font-bold mb-8">
        Progress Overview
      </h1>

      <div className="space-y-8">

        <div>

          <div className="flex justify-between mb-2">

            <span>
              Lessons Completed
            </span>

            <span>
              {completedLessons}
            </span>

          </div>

          <div className="w-full bg-gray-200 rounded-full h-4">

            <div
              className="bg-blue-500 h-4 rounded-full"
              style={{
                width: `${completedLessons * 10}%`,
              }}
            ></div>

          </div>

        </div>


        <div>

          <div className="flex justify-between mb-2">

            <span>
              Quizzes Completed
            </span>

            <span>
              {completedQuizzes}
            </span>

          </div>

          <div className="w-full bg-gray-200 rounded-full h-4">

            <div
              className="bg-green-500 h-4 rounded-full"
              style={{
                width: `${completedQuizzes * 20}%`,
              }}
            ></div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ProgressChart;