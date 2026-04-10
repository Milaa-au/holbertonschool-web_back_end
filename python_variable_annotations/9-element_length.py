#!/usr/bin/env python3
"""TASK 09"""

from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Retourne la taille"""
    return [(i, len(i)) for i in lst]
