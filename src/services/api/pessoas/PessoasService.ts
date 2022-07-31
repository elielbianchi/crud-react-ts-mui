import { Environment } from '../../../environment';
import { Api } from '../axios-config';

interface IListagemPessoa {
  id: number;
  email: string;
  cidadeId: number;
  nomeCompleto: string;
}

interface IDetalhePessoa {
  id: number;
  email: string;
  cidadeId: number;
  nomeCompleto: string;
}

type TPessoasComTotalCount = {
  data: IListagemPessoa[];
  totalCount: number;
};

const getAll = async (
  page = 1,
  filter = ''
): Promise<TPessoasComTotalCount | Error> => {
  try {
    const urlRelativa = `/pessoas?_page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}&nomeCompleto_like=${filter}`;

    const { data, headers } = await Api.get(urlRelativa);

    if (data) {
      return {
        data,
        totalCount: Number(
          headers['x-total-count'] || Environment.LIMITE_DE_LINHAS
        ),
      };
    }

    return new Error('Não foi possível listas os registros');
  } catch (error) {
    console.log(error);
    return new Error(
      (error as { message: string }).message ||
        'Não foi possível listar os registros'
    );
  }
};

const getById = async (id: number): Promise<IDetalhePessoa | Error> => {
  try {
    const urlRelativa = `/pessoas/${id}`;

    const { data } = await Api.get(urlRelativa);

    if (data) {
      return data;
    }

    return new Error('Não foi possível listar o registro');
  } catch (error) {
    console.log(error);
    return new Error(
      (error as { message: string }).message ||
        'Não foi possível listar o registro'
    );
  }
};

const create = async (
  dados: Omit<IDetalhePessoa, 'id'>
): Promise<number | Error> => {
  try {
    const urlRelativa = '/pessoas';

    const { data } = await Api.post<IDetalhePessoa>(urlRelativa, dados);

    if (data) {
      return data.id;
    }

    return new Error('Não foi possível criar o registro');
  } catch (error) {
    console.log(error);
    return new Error(
      (error as { message: string }).message ||
        'Não foi possível criar o registro'
    );
  }
};

const updateById = async (
  id: number,
  dados: IDetalhePessoa
): Promise<void | Error> => {
  try {
    const urlRelativa = `/pessoas/${id}`;

    await Api.put(urlRelativa, dados);
  } catch (error) {
    console.log(error);
    return new Error(
      (error as { message: string }).message ||
        'Não foi possível atualizar o registro'
    );
  }
};

const deleteById = async (id: number): Promise<void | Error> => {
  try {
    const urlRelativa = `/pessoas/${id}`;

    await Api.delete(urlRelativa);
  } catch (error) {
    console.log(error);
    return new Error(
      (error as { message: string }).message ||
        'Não foi possível deletar o registro'
    );
  }
};

export const PessoasService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
