import { CreateMensajeDto } from "../dto/create-mensaje-dto";

describe("CreateMensajeDto", () => {
  it("should be defined", () => {
    expect(new CreateMensajeDto()).toBeDefined();
  });
});
