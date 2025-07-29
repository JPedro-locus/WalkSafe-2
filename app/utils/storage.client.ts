// app/utils/storage.client.ts

// Define interfaces
export interface Comment {
  author: string;
  text: string;
}

export interface Occurrence {
  id: string;
  local: string;
  data: string;       // YYYY-MM-DD
  crime: string;
  descricao: string;
  hasBo: boolean;
  numeroBo?: string;
  comments: Comment[];
}

const OCCURRENCES_KEY = "walksafe_ocorrencias";

// Seed com 10 relatos em diferentes bairros de Recife
const SEED_DATA: Occurrence[] = [
  {
    id: "seed-1",
    local: "Av. Boa Viagem, Boa Viagem, Recife – PE",
    data: "2025-07-10",
    crime: "Roubo",
    descricao: "Fui abordado por um indivíduo armado dentro do coletivo.",
    hasBo: true,
    numeroBo: "2025-000100-01",
    comments: [],
  },
  {
    id: "seed-2",
    local: "Rua Conde da Boa Vista, Boa Vista, Recife – PE",
    data: "2025-07-12",
    crime: "Furto",
    descricao: "Alguém pegou meu celular enquanto eu atravessava a rua.",
    hasBo: false,
    comments: [],
  },
  {
    id: "seed-3",
    local: "Rua do Espinheiro, Espinheiro, Recife – PE",
    data: "2025-07-08",
    crime: "Assédio",
    descricao: "Sofri importunação por um motoqueiro durante o trânsito lento.",
    hasBo: true,
    numeroBo: "2025-000101-02",
    comments: [],
  },
  {
    id: "seed-4",
    local: "Rua Doutor José Maria, Casa Forte, Recife – PE",
    data: "2025-07-15",
    crime: "Agressão",
    descricao: "Levei um empurrão e socos após discussão no metrô.",
    hasBo: false,
    comments: [],
  },
  {
    id: "seed-5",
    local: "Rua Dom Bosco, Santo Amaro, Recife – PE",
    data: "2025-07-05",
    crime: "Roubo",
    descricao: "Carteira e documentos levados dentro de um táxi.",
    hasBo: true,
    numeroBo: "2025-000102-03",
    comments: [],
  },
  {
    id: "seed-6",
    local: "Rua do Pina, Pina, Recife – PE",
    data: "2025-07-18",
    crime: "Furto",
    descricao: "Bolsa roubada durante corrida na orla.",
    hasBo: false,
    comments: [],
  },
  {
    id: "seed-7",
    local: "Rua do Derby, Derby, Recife – PE",
    data: "2025-07-20",
    crime: "Assédio",
    descricao: "Tentativa de beijo forçado na calçada.",
    hasBo: true,
    numeroBo: "2025-000103-04",
    comments: [],
  },
  {
    id: "seed-8",
    local: "Rua Princesa Isabel, Madalena, Recife – PE",
    data: "2025-07-22",
    crime: "Agressão",
    descricao: "Sofri um tapa no rosto em briga de bar.",
    hasBo: false,
    comments: [],
  },
  {
    id: "seed-9",
    local: "Rua da Aurora, Graças, Recife – PE",
    data: "2025-07-25",
    crime: "Furto",
    descricao: "Carteira furtada enquanto pedalava na ciclovia.",
    hasBo: false,
    comments: [],
  },
  {
    id: "seed-10",
    local: "Via Mangue, Aflitos, Recife – PE",
    data: "2025-07-27",
    crime: "Roubo",
    descricao: "Celular tomado por assaltante em motocicleta.",
    hasBo: true,
    numeroBo: "2025-000104-05",
    comments: [],
  },
];

// Pega ocorrências (seed na primeira visita)
export const getOccurrences = (): Occurrence[] => {
  if (typeof window === "undefined") return [];
  const raw = localStorage.getItem(OCCURRENCES_KEY);
  if (!raw) {
    localStorage.setItem(OCCURRENCES_KEY, JSON.stringify(SEED_DATA));
    return [...SEED_DATA];
  }
  try {
    return JSON.parse(raw) as Occurrence[];
  } catch {
    localStorage.setItem(OCCURRENCES_KEY, JSON.stringify(SEED_DATA));
    return [...SEED_DATA];
  }
};

// Salva uma nova ocorrência
export const saveOccurrence = (
  occurrence: Omit<Occurrence, "id" | "comments">
): Occurrence | undefined => {
  if (typeof window === "undefined") return;
  const occurrences = getOccurrences();
  const newOccurrence: Occurrence = {
    ...occurrence,
    id: new Date().toISOString(),
    comments: [],
  };
  occurrences.unshift(newOccurrence);
  localStorage.setItem(OCCURRENCES_KEY, JSON.stringify(occurrences));
  return newOccurrence;
};

// Adiciona comentário a uma ocorrência
export const addCommentToOccurrence = (
  occurrenceId: string,
  author: string,
  text: string
) => {
  if (typeof window === "undefined") return;
  const occurrences = getOccurrences();
  const idx = occurrences.findIndex((o) => o.id === occurrenceId);
  if (idx > -1) {
    occurrences[idx].comments.push({ author, text });
    localStorage.setItem(OCCURRENCES_KEY, JSON.stringify(occurrences));
  }
};
