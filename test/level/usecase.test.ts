import { LevelMapper } from "../../src/application/mappers/level-mappers";
import { CreateLevelUseCase } from "../../src/application/use-cases/Level/create-use-case";
import { GetAllLevelUseCase } from "../../src/application/use-cases/Level/get-all-use-case";
import { LevelRequest } from "../../src/application/use-cases/Level/request";
import { LevelRepository } from "../../src/domain/repository/level-repository";
import { Level } from '../../src/domain/entities/level-entity';
import { DeleteLevelUseCase } from "../../src/application/use-cases/Level/delete-use-case";
import { UpdateLevelUseCase } from "../../src/application/use-cases/Level/update-use-case";


jest.mock('../../src/domain/repository/level-repository.ts');

describe('CreateLevelUseCase', () => {
  let levelRepositoryMock: jest.Mocked<LevelRepository>;
  let createLevelUseCase: CreateLevelUseCase;
  let getAllLevelUseCase: GetAllLevelUseCase;
  let deleteLevelUseCase: DeleteLevelUseCase;
  let updateLevelUseCase: UpdateLevelUseCase;


  beforeEach(() => {
    levelRepositoryMock = {
      create: jest.fn(),
      findById: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
      getAll: jest.fn(),
    } as jest.Mocked<LevelRepository>;

    createLevelUseCase = new CreateLevelUseCase(levelRepositoryMock);
    getAllLevelUseCase = new GetAllLevelUseCase(levelRepositoryMock);
    deleteLevelUseCase = new DeleteLevelUseCase(levelRepositoryMock);
    updateLevelUseCase = new UpdateLevelUseCase(levelRepositoryMock)
  });


  test('should create a new level', async () => {
    const levelRequest: LevelRequest = { code: 'LVL001', name: 'Beginner' };
    const newLevelData = LevelMapper.toEntity(levelRequest);

    levelRepositoryMock.create.mockResolvedValueOnce(newLevelData);

    const result = await createLevelUseCase.execute(levelRequest);

    if (result === null) {
      throw new Error('Unexpected null response');
    }

    expect(levelRepositoryMock.create).toHaveBeenCalledWith(newLevelData);
    expect(result).toEqual(LevelMapper.toEntity(newLevelData));
  });


  test("should update a level", async () => {

    const mockLevel: LevelRequest = {
      id: "3",
      code: 'LVL001',
      name: 'Lollytest',
    };

    const newdata = LevelMapper.toEntity(mockLevel);

    levelRepositoryMock.findById.mockRejectedValueOnce(new Error("Level not found"));


    levelRepositoryMock.update.mockResolvedValueOnce(newdata);
  
  
    await expect(updateLevelUseCase.execute(mockLevel)).rejects.toThrow("Level not found");
  
    expect(levelRepositoryMock.findById).toHaveBeenCalledWith(mockLevel.id);
  });



  test('should get all levels', async () => {

    const mockLevels: Level[] = [
      new Level({ id: '1', code: 'LVL001', name: 'Beginner' }),
      new Level({ id: '2', code: 'LVL002', name: 'Intermediate' }),
    ];


    levelRepositoryMock.getAll.mockResolvedValueOnce(mockLevels);
    const result = await getAllLevelUseCase.execute();


    expect(levelRepositoryMock.getAll).toHaveBeenCalled();
    expect(result).toEqual(mockLevels);
  });


  test("should delete a Level ", async () => {

    const mockLevelId = "1";
    levelRepositoryMock.delete.mockResolvedValueOnce(undefined);

    await deleteLevelUseCase.execute(mockLevelId);

    expect(levelRepositoryMock.delete).toHaveBeenCalledWith(mockLevelId);


  })


  afterEach(() => {
    jest.clearAllMocks();
  });
});
