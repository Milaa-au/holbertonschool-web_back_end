#!/usr/bin/env python3
"""TASL 08"""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Retourne une fonction qui multiplie."""
    def multipliers(x: float) -> float:
        """Fonction qui se multiplie."""
        return x * multiplier
    return multipliers