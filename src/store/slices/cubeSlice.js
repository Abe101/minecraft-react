import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

import { LocalStorage } from "../../helpers/local-storage";

const { get, set } = LocalStorage;

const initialState = {
  texture: "dirt",
  cubes: get("@cubes") || [],
};

export const cubesSlice = createSlice({
  name: "cubes",
  initialState,
  reducers: {
    addCube: (state, action) => {
      const { X, Y, Z } = action.payload;
      const newCubes = [
        ...state.cubes,
        {
          key: nanoid(),
          pos: [X, Y, Z],
          texture: state.texture,
        },
      ];
      state.cubes = newCubes;
    },
    removeCube: (state, action) => {
      const { X, Y, Z } = action.payload;
      const newCubes = state.cubes.filter((cube) => {
        const [x, y, z] = cube.pos;
        return x !== X || y !== Y || z !== Z;
      });
      state.cubes = newCubes;
    },
    setTexture: (state, action) => {
      state.texture = action.payload;
    },
    saveCubes: (state) => {
      set("@cubes", state.cubes);
      toast.success("Saved!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
    resetCubes: (state) => {
      state.cubes = [];
    },
  },
});

// eslint-disable-next-line prettier/prettier
export const { addCube, removeCube, setTexture, saveCubes, resetCubes } = cubesSlice.actions;

export default cubesSlice.reducer;
