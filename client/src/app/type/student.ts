export type Student = {
  id: number;
  name: string;
  phase: number;
  countThanks: number;
};
export type StudentId = Student['id'];
export type StudentPhase = Student['phase']
