export const problemMockData = {
  id: -1,
  title: 'problem_mock',
  context: 'problem_mock',
  max_cpu_time: 0,
  max_memory: 0,
  language: [
    {
      id: -1,
      name: 'problem_mock',
    },
  ],
  submission: 0,
  accepted: 0,
}

export const problemSubmitResponseMockData = {
  id: -1,
  language_id: -1,
  member_id: -1,
  problem_id: -1,
  source_code: 'problem_submit_source_code',
  updated_at: new Date().toDateString(),
  created_at: new Date().toDateString(),
}
