export interface TipoHerramienta {
  data: DataTipoHerramienta[];
}

export interface DataTipoHerramienta {
  id: number;
  descripcion: string;
  created_at: Date;
  updated_at: Date;
}
