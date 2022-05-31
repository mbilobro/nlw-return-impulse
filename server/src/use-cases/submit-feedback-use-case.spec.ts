import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

// test('sum 2 + 2', () => {
//     expect(2 + 2).toBe(4)
// });

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase (
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
)

describe('Submit Feedback', () => {
    it('should be able to submit feedback', async () => {
      
      await expect(submitFeedback.execute({
          type: 'BUG',
          comment: 'teste feedback jest',
          screenshot: 'data:image/png;base64,aiklusdgksa',
      })).resolves.not.toThrow();
      expect(createFeedbackSpy).toHaveBeenCalled();
      expect(sendMailSpy).toHaveBeenCalled();
    });

    it('should not be able to submit feedback without type', async () => {
      
        await expect(submitFeedback.execute({
            type: '',
            comment: 'teste feedback jest',
            screenshot: 'data:image/png;base64,aiklusdgksa',
        })).resolves.toThrow();
      });

      it('should not be able to submit feedback without comment', async () => {
      
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64,aiklusdgksa',
        })).resolves.toThrow();
      });

      it('should not be able to submit feedback with an invalid screenshot', async () => {
      
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'Bugado!',
            screenshot: 'foto.jpg',
        })).resolves.toThrow();
      });
});